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

    Why we need NodeJS if angular apps (SPA app) run on client (browsers) ???

        Developing an app means
            1. compose the codebase (in typescript)                             VS Code and angular cli
            2. transpell it into native javascript                              babel / tsc
            3. the transpelled code base must be packaged into a bundle         webpack
            4. execute test cases to ensure the quality, integrity,             karma and jasmine
                and validity of the app.
            5. then host it on a server.                                        angular development server

        now the tools like angular cli, tsc, webpack, krama and jasmine ..etc - that are
        needed in the process of developing angular project - will execute on NodeJS.

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
                13

    Angular CLI
        cli - command line interface
        is a tool used to initiate and manage an angular project.

        ng --version

        npm install -g @angular/cli

    Angular Archetecture
        
        1. Each angular resource is a class
        2. Each angular resource class is marked with a decorator to indicate 
            the role of the class.
        3. Each decorator carries a json object called meta-data.
        4. Meta-data has the configuarations of each angular resource.

        Modules
            @NgModule({
                declarations:[],
                exports:[],
                imports:[],
                providers:[],
                bootstrap:[]
            })
            class MyModule {}

            a. an angular module is a logical group of other modules,components,pipes,directives,service ..etc.,
            b. each angular app must have one main module and is called ROOT MODULE
            c. the whole angular app must live inside the ROOT MODULE only.

                ROOT-MODULE AppModule
                                |- MainComponent
                                |- SalesModule
                                    |- OrdersComponent
                                    |- OffersComponent
                                |- InventoryModule
                                    |- AddStockComponent
                                    |- UpdateStockComponent
                                |- SecurityModule
                                    |- LogInComponent
                                    |- RegisterComponent 

                declarations     have the list of components,pipes,directives that belong to this module
                exports          have the list of components,pipes,directives that are exported outside this module,
                                 exports proeprty is never used in ROOT-MODULE.
                imports          have the list of sub-modules we wish to import into this module
                providers        have the list of services that belong to this module
                bootstrap        have list of components that must be instatiated immediately after this module is
                                loaded / activated. The bootstrap property is used only in the ROOT-MODULE

        Components
            @Component({
                selector:'',
                templateUrl:'',
                providers:[]
            })
            class MyComponent{}

            a. a component is an extended html-element. An html-element that we have created.
            b. each component has a behaviour part and presnetation part.
            c. the presentation part is called template.
            d. the behaviour part is the component class itself.

            counter.component.html
                <h2>{{count}}</h2>
                <button (click)="increase()">UP</button>
                <button (click)="decrease()">DOWN</button>
            
            counter.component.ts
            @Component({
                selector:'my-counter',
                templateUrl:'counter.component.html'
            })
            class Counter {

                count : number;

                constructor(){
                    this.count=1;
                }

                increase() {
                    this.count++;
                }

                decrease(){
                    this.count--;
                }
            }

            index.html
                <html>
                    <head>
                    </head>
                    <body>
                        <my-counter></my-counter>
                        <my-counter></my-counter>
                        <my-counter></my-counter>
                        <my-counter></my-counter>
                    </body>
                </html>

        Directives
            @Directive({
                selector:'',
                providers:[]
            })
            class MyDirecitve{}

            a. a directive is an exteded html-attribute. An html-attribute that we have created.
            b. we have various types of directives
                  i) InBuilt Directives
                 ii) Custom Directives
                iii) Structural Directives
                        *ngIF
                        *ngFor
                        ngSwitch
                 iv) Event Directives
                        click
                        dblclick
                        mouseover
                        mouseleave
                        mouseup
                        keyup
                        keydown
                        blur
                        focus
                        ...etc.,

        Services
            @Injectable({
                providedIn:'root',
                providers:[]
            })
            class MyService{}

            a. a service is a class that hold reusable computational or communicational logic. like
                    calicualtions, validations, rest-api calls ...etc

        Pipes
            @Pipe({
                name:'',
                providers:[]
            })
            class MyPipe{}

            a. a pipe is used to tranform a piece of data into another just before rendering it on the screen.
            b. inbuilt pipes
                    lowercase
                    uppercase
                    number
                    percentage
                    currency
                    date
                    async
                    json
            c. custom pipes

        Guards              are special case of services, @Injectable
        Interceptors        are special case of services, @Injectable
        ...etc.,

    Angular CLI Commands

        ng new proj-name

        proj-name> ng g component component-name
        proj-name> ng g module module-name
        proj-name> ng g directive directive-name
        proj-name> ng g pipe pipe-name
        proj-name> ng g service service-name
        proj-name> ng g class class-name
        proj-name> ng g guard guard-name

        proj-name> ng serve --port 7777 -o
        proj-name> ng build
        proj-name> ng test
