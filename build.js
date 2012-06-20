var srcFile = 'guide.md';
var buildDir = 'build';
var rootName = 'guide-toc';
var footer = "\n\n*Copyright 2012 Mike Gai. All rights reserved.*"

var path = require('path');
var fs = require('fs');
var cli = require('commander');
var wrench = require('wrench');
var markdown = require('markdown').markdown;
var lazy = require('lazy');

cli
    .command('build')
    .description('build the broken-up doc structure')
    .action(build);

cli
    .command('clean')
    .description('erase the build directory and its contents')
    .action(clean);

//function build() {
//    clean();
//    console.log('building doc structure...');
//    fs.mkdirSync(buildDir);
//    var input = fs.readFileSync(srcFile, 'utf8');
//    var tree = markdown.toHTMLTree(input);
//    var pages = {};
//    pages[rootName]=[];
//    var currentPage = pages[rootName];
//    for (var i = 0;i<tree.length;i++){
//        var thisNode = tree[i];
//        if (thisNode && thisNode.slice && thisNode[0]=='h2') {
//            pages[thisNode[1]] = [];
//            currentPage = pages[thisNode[1]];
//        }
//        currentPage.push(thisNode);
//    }
//    for (var pageName in pages){
//        var output = '<html><body>' + markdown.toHTML(pages[pageName]) + '</body></html>'
//        fs.writeFile(buildDir + '/' + pageName + '.html', output );
//    }
//}

function build(){
    clean();
    console.log('building doc structure...');

    //set up indentation array
    var indents=[];
    var indent = '';
    for (var i =0;i<10;i++) {
        indents[i] = indent;
        indent = indent + '    ';
    }

    fs.mkdirSync(buildDir);
    var pages = {};
    //var h2Regex = /\#\#\s*(([\w ]?\w)*)/;

    var headerRegex =/^#+/;
    var h2Regex = /^\#\#[^#]/;
    pages[rootName] = [];
    var currentPage = pages[rootName];
    var currentPageName = rootName;
    var linkReferencesRegex = /]\s*\(\s*(#[^/)]*)/g;
    var headers = {};
    function linkify(str, char){
        char = char || '-';
        return str
            .replace("'",'') //eliminate aposrophes
            .replace(/[^a-zA-Z0-9]/g,char) //replace special characters
            .replace(/[\_\-]+/g,char)  //trim duplicate dashes
            .replace(/^[\_\-]|[\_\-]$/,'')//trim leading/trailing dashes
            .toLowerCase();
    }
    new lazy(fs.createReadStream(srcFile))
        .lines
        .forEach(function(line){
            var line = line.toString();
            if (line==0) line = '';
            //break out along h2 lines...
            var h2Matches = line.match(h2Regex);
            if (h2Matches!=null) {
                var name = linkify(line.substring(h2Matches[0].length-1).trim());
                console.log('----------> ' +  name);
                pages[name] = [];
                currentPage = pages[name];
                currentPageName = name;
            }
            //is this a header? if so, save globally for later linking
            var headerMatches = line.match(headerRegex);
            if (headerMatches && headerMatches.length==1) {
                var name = line.substring(headerMatches[0].length).trim();
                var anchorName = linkify(name);
                headers[anchorName] = {
                    text:name,
                    page:currentPageName,
                    depth:headerMatches[0].length-1
                };
            }
            currentPage.push(line);
        })
        .join(function(){            
            var r = pages[rootName];
            r.push('#Guide to GluJS');
            r.push('###Table of Contents')
            for (var headerName in headers) {
                var header = headers[headerName];
                var line = indents[header.depth] + '* [' + header.text + '](#' + headerName +')';
                r.push(line);
            }
            //output pages and fix links to accomodate split pages
            for (var pageName in pages){
                var lines = pages[pageName];
                for (var i = 0; i<lines.length; i++){
                    lines[i] = lines[i].replace(linkReferencesRegex, function(match, link){
                        if (link==null) return;
                        link = link.substring(1);
                        if (headers[link]===undefined) throw "Cannot find link for -> " + link;
                        if (headers[link].page===pageName) return match;
                        var replaced = '](' + headers[link].page + '.md#' + link;
                        return replaced;
                    });
                }
                fs.writeFile(buildDir + '/' + pageName + '.md',lines.join('\n') + footer);
            }
        });

}

function clean() {
    if (path.existsSync(buildDir)) {
        wrench.rmdirSyncRecursive('build');
        console.log('deleted old build.');
    } else {
        console.log('no old build to clean.');
    }
}

//EXECUTE
cli.parse(process.argv);