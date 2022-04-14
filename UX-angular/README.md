Angular
--------------------------------------------------------------------------

    is a javascript framework to develop an SPA- Single Page Application.

    Website
        is a folder having a few html documents and which is hosted on a public http domain.

        WebServer                                           WebClient / Browser
            www.myarticles.in  <-----send a req using a URL
                index.htm       --related html page is reponded---->
                aboutus.htm
                article1.htm
                .....

    Dynamic Web Application
        if a software like booking tickets, or shopping or ..etc can be accessed ober
        http protocol, it is a web application. the content of the pages are not static and are
        furnished dynamically depending on the user who is viewing it and other parameters and hence
        called dynamic web application.

           WebServer                                           WebClient / Browser
            www.onlineshopping.in  <-----send a req using a URL
                
            Server side 
             executing programes  ---generates html content based
              (servlets/.jsp/       on the incoming req and the
                .asp/.aspx/             generated html content is responded--->
               .php ..etc)

    Single Page Application
        a single page application is a web applciation which has one single html page
        and a lots of client side executing javascript code. the Single Page + the javascript code
        togather is called SPA-bundle.

        WebServer                                           WebClient / Browser
            www.onlineshopping.in 
           
             SPA-Bundle             <--the first req------
                index.html +        ---the entire spa-bundle---->   spa-bundle is laoded
                lots of javascript

             rest-api               <---req for any data-------
                                    --------data as json/xml----->  the data is received
                                                                        by the javascript code
                                                                        and that generates the
                                                                        html needed.,


                =======================================================================
                |        ONLINe LIBRARY SYSTEM                                        |  
                |---------------------------------------------------------------------|
                |  Books  | Authors  | Availabilities |                               |
                |---------------------------------------------------------------------|
                | Books List                                                          |
                |                                                                     |
                |                                                                     |
                |                                                                     |
                |                                                                     |
                |                                                                     |
                |                                                                     |
                =======================================================================

                =======================================================================
                |        ONLINe LIBRARY SYSTEM                                        |  
                |---------------------------------------------------------------------|
                |  Books  | Authors  | Availabilities |                               |
                |---------------------------------------------------------------------|
                | Authors List                                                        |
                |                                                                     |
                |                                                                     |
                |                                                                     |
                |                                                                     |
                |                                                                     |
                |                                                                     |
                =======================================================================


    Angular Evolution

        AngularJS       javascript as a scripting language

        Angular 2       typescript as a scripting langauge
                4
                5
                6
                7
                8
                9
                10
                11
                12

    Angular CLI
        cli - command line interface
        is a tool used to initiate and manage an angualr project.

        ng --version

        npm install -g @angular/cli

        
