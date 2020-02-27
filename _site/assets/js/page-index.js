(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "README.md",
                title: "How to create a new Opendoc",
                url: "/readme",
                escapedPath: "README.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["",null,null]
            },
            
        
        
        
        {
                name: "index.md",
                title: "Index",
                url: "/User%20Guide/",
                escapedPath: "User%20Guide/index.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User guide",null,null]
            },
            
        {
                name: "index.md",
                title: "Test Document",
                url: "/AA%20Document%202/",
                escapedPath: "AA%20Document%202/index.md",
                dir: "/AA%20Document%202/",
                tocId: "toc_/aa%20document%202/",
                documentInfo: ["Aa document 2",null,null]
            },
            
        {
                name: "index.md",
                title: "This is a Document Title",
                url: "/Document%201/",
                escapedPath: "Document%201/index.md",
                dir: "/Document%201/",
                tocId: "toc_/document%201/",
                documentInfo: ["Document 1",null,null]
            },
            
        {
                name: "index.md",
                title: "Sample page",
                url: "/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["",null,null]
            },
            
        {
                name: "using-markdown.md",
                title: "Using Markdown",
                url: "/opendoc-theme/Docu%20ment2/using-markdown.html",
                escapedPath: "opendoc-theme/Docu%20ment2/using-markdown.md",
                dir: "/opendoc-theme/Docu%20ment2/",
                tocId: "toc_/opendoc-theme/",
                documentInfo: ["Opendoc-theme",null,null]
            },
            
        
        
        {
                name: "page1.md",
                title: "Prospiciunt morti 1",
                url: "/AA%20Document%202/page1.html",
                escapedPath: "AA%20Document%202/page1.md",
                dir: "/AA%20Document%202/",
                tocId: "toc_/aa%20document%202/",
                documentInfo: ["Aa document 2",null,null]
            },
            
        {
                name: "page2.md",
                title: "Prospiciunt morti 2",
                url: "/AA%20Document%202/page2.html",
                escapedPath: "AA%20Document%202/page2.md",
                dir: "/AA%20Document%202/",
                tocId: "toc_/aa%20document%202/",
                documentInfo: ["Aa document 2",null,null]
            },
            
        {
                name: "FAQs.md",
                title: "FAQs",
                url: "/Document%201/FAQs.html",
                escapedPath: "Document%201/FAQs.md",
                dir: "/Document%201/",
                tocId: "toc_/document%201/",
                documentInfo: ["Document 1",null,null]
            },
            
        {
                name: "page1.md",
                title: "Sign up",
                url: "/Document%201/page1.html",
                escapedPath: "Document%201/page1.md",
                dir: "/Document%201/",
                tocId: "toc_/document%201/",
                documentInfo: ["Document 1",null,null]
            },
            
        {
                name: "page2.md",
                title: "Prospiciunt morti 2",
                url: "/Document%201/page2.html",
                escapedPath: "Document%201/page2.md",
                dir: "/Document%201/",
                tocId: "toc_/document%201/",
                documentInfo: ["Document 1",null,null]
            },
            
        {
                name: "Browse Topic.md",
                title: "Browse Topics",
                url: "/User%20Guide/Browse%20Topic.html",
                escapedPath: "User%20Guide/Browse%20Topic.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User guide",null,null]
            },
            
        {
                name: "Getting Started.md",
                title: "Getting Started",
                url: "/User%20Guide/Getting%20Started.html",
                escapedPath: "User%20Guide/Getting%20Started.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User guide",null,null]
            },
            
        {
                name: "Glossary.md",
                title: "Glossary",
                url: "/User%20Guide/Glossary.html",
                escapedPath: "User%20Guide/Glossary.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User guide",null,null]
            },
            
        {
                name: "Home Page.md",
                title: "Home Page",
                url: "/User%20Guide/Home%20Page.html",
                escapedPath: "User%20Guide/Home%20Page.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User guide",null,null]
            },
            
        {
                name: "Introduction.md",
                title: "Introduction #",
                url: "/User%20Guide/Introduction.html",
                escapedPath: "User%20Guide/Introduction.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User guide",null,null]
            },
            
        {
                name: "My Subscribers.md",
                title: "My Subscribers #",
                url: "/User%20Guide/My%20Subscribers.html",
                escapedPath: "User%20Guide/My%20Subscribers.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User guide",null,null]
            },
            
        {
                name: "My Subscriptions.md",
                title: "My Subscriptions #",
                url: "/User%20Guide/My%20Subscriptions.html",
                escapedPath: "User%20Guide/My%20Subscriptions.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User guide",null,null]
            },
            
        {
                name: "Projects.md",
                title: "Projects",
                url: "/User%20Guide/Projects.html",
                escapedPath: "User%20Guide/Projects.md",
                dir: "/User%20Guide/",
                tocId: "toc_/user%20guide/",
                documentInfo: ["User guide",null,null]
            },
            
        {
                name: "report.md",
                title: "Shanker Maghalingam v Public Prosecutor",
                url: "/opendoc-theme/2019_SGHC%20120/report.html",
                escapedPath: "opendoc-theme/2019_SGHC%20120/report.md",
                dir: "/opendoc-theme/2019_SGHC%20120/",
                tocId: "toc_/opendoc-theme/",
                documentInfo: ["Opendoc-theme",null,null]
            },
            
        {
                name: "report.md",
                title: "Innovative Corp Pte Ltd v Ow Chun Ming and another",
                url: "/opendoc-theme/2019_SGHC_121/report.html",
                escapedPath: "opendoc-theme/2019_SGHC_121/report.md",
                dir: "/opendoc-theme/2019_SGHC_121/",
                tocId: "toc_/opendoc-theme/",
                documentInfo: ["Opendoc-theme",null,null]
            },
            
        {
                name: "report.md",
                title: "Report",
                url: "/opendoc-theme/2019_SGHC_122/report.html",
                escapedPath: "opendoc-theme/2019_SGHC_122/report.md",
                dir: "/opendoc-theme/2019_SGHC_122/",
                tocId: "toc_/opendoc-theme/",
                documentInfo: ["Opendoc-theme",null,null]
            },
            
        {
                name: "getting-started.md",
                title: "Getting started",
                url: "/opendoc-theme/Docu%20ment2/getting-started.html",
                escapedPath: "opendoc-theme/Docu%20ment2/getting-started.md",
                dir: "/opendoc-theme/Docu%20ment2/",
                tocId: "toc_/opendoc-theme/",
                documentInfo: ["Opendoc-theme",null,null]
            },
            
        {
                name: "sample.md",
                title: "Bachmeer Capital Limited v Ong Chih Ching and others",
                url: "/opendoc-theme/Docu%20ment2/sample.html",
                escapedPath: "opendoc-theme/Docu%20ment2/sample.md",
                dir: "/opendoc-theme/Docu%20ment2/",
                tocId: "toc_/opendoc-theme/",
                documentInfo: ["Opendoc-theme",null,null]
            },
            
        {
                name: "contribute.md",
                title: "Contribute",
                url: "/opendoc-theme/Document%201/contribute.html",
                escapedPath: "opendoc-theme/Document%201/contribute.md",
                dir: "/opendoc-theme/Document%201/",
                tocId: "toc_/opendoc-theme/",
                documentInfo: ["Opendoc-theme",null,null]
            },
            
        {
                name: "introduction.md",
                title: "Introduction",
                url: "/opendoc-theme/Document%201/introduction.html",
                escapedPath: "opendoc-theme/Document%201/introduction.md",
                dir: "/opendoc-theme/Document%201/",
                tocId: "toc_/opendoc-theme/",
                documentInfo: ["Opendoc-theme",null,null]
            },
            
        {
                name: "import-files.md",
                title: "Import your files",
                url: "/opendoc-theme/import-files.html",
                escapedPath: "opendoc-theme/import-files.md",
                dir: "/opendoc-theme/",
                tocId: "toc_/opendoc-theme/",
                documentInfo: ["Opendoc-theme",null,null]
            },
            
        {
                name: "readme.md",
                title: "Readme",
                url: "/opendoc-theme/Docu%20ment2/",
                escapedPath: "opendoc-theme/Docu%20ment2/readme.md",
                dir: "/opendoc-theme/Docu ment2/",
                tocId: "toc_/opendoc-theme/",
                documentInfo: ["Opendoc-theme",null,null]
            },
            
        {
                name: "README.md",
                title: "opendoc-theme",
                url: "/opendoc-theme/",
                escapedPath: "opendoc-theme/README.md",
                dir: "/opendoc-theme/",
                tocId: "toc_/opendoc-theme/",
                documentInfo: ["Opendoc-theme",null,null]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()