var srcFile = 'guide.md';
var buildDir = 'build';

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
//    pages['root']=[];
//    var currentPage = pages['root'];
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
    fs.mkdirSync(buildDir);
    var pages = {};
    //var h2Regex = /\#\#\s*(([\w ]?\w)*)/;
    var h2Regex = /^\#\#[^#]/;
    pages['root'] = [];
    var currentPage = pages['root'];
    var linkReferencesRegex = /]\s*\(\s*(#[\w\s]*)/g;
    var linkTargets = [];
    new lazy(fs.createReadStream(srcFile))
        .lines
        .forEach(function(line){
            var line = line.toString();
            if (line==0) line = '';
            var h2Matches = line.match(h2Regex);
            if (h2Matches!=null) {
                var name = line.substring(h2Matches[0].length-1).trim();
                console.log(line);
                console.log('----------> ' +  name);
                pages[name] = [];
                currentPage = pages[name];
            }
            var linkMatches = [];
            currentPage.push(line);
        })
        .join(function(){
            console.log (JSON.stringify(pages));
            for (var pageName in pages){
                fs.writeFile(buildDir + '/' + pageName + '.markdown',pages[pageName].join('\n'));
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