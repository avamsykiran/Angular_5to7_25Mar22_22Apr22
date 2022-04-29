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

    Data Binding

        linking the fields and method of a component class in its template is called 
        data binding.

        Interpolation
            is rendering an angular expression on to the template.

            {{angular-expression}}

        One-Way Binding
            Attribute Binding

                [attribute]="field"

                <table width="500px"></table>
                <table [width]="tableWidth"></table>

            Style Binding

                [style.cssProperty]="field"

            CSS Class Binding
                
                [class]="{className1:true,className2:false}"

            Event Binding
            
                (event-directive)="method()"

        Two-Way Binding

            is needed only with form elements.

            ngModel is a directive from FormsModule only supports two-way binding.

            this directive can be used only on form elements.

            [(ngModel)]="fieldName"

    Custom Pipes Assignemnt#1

        num = 2120345; //assuming the number will not be greater than one crore

        {{num|group:'3'}} 

        2,120,345

        {{num|group:'2'}}

        21,20,345 

        {{num|group:'1'}}

        2,1,2,0,345


    Custom Pipes Assignemnt#2

        num = 12345; //assuming the number will not be greater than one crore

        {{num|inFullWords}} <br />

        Twelve Thousand Three Hundred Forty Five

    Integrating Bootstrap 5 with Angular

        npm install bootstrap --save

        include the 'node_modules/bootstrap/dist/css/bootstrap.css' in the styles section of angular.json
        include the 'node_modules/bootstrap/dist/js/bootstrap.js' in the scripts section of angular.json
    
    Routing

        is a way where each component can be mapped to a url.
        and the component is rendered only when that url is visited.

        RouterModule

            Route           path:'url',
                            component:ComponentToWhichTheMappingIsBeingMade,
                            pathMatch:'full|startsWith',
                            redirectTo:'',
                            children:[],
                            canActivate:[],
                            canLoad:[],
                            canDeactivate:[]

            Routes          an array of Route objects

            forRoot(RoutesObject)
            forChild(RoutesObject)

            router-outlet   is a component that reserve place for the routed components
                            in the parent component template, to be replaced while
                            navigating.

            routerLink          is a directive of 'a' element instead of 'href' attribute.
            routerLinkActive    is a directive that takes a css-class. that css class si applied only active link.

            Router              is a service offering the methods
                                navigateByUrl('')
                                navigate(urlTree)
    Angular Forms

        Template Driven Forms

            1. are constructed completly in the template
            2. these forms are bound to the component data-memebers using ngModel directive from FormsModule
            3. these forms are simple and are limited in functionality.
            4. these forms depend on the html 5 validations api for data validation.
            5. ngModel directive creates an object each for one input field.
            6. ngModel directive has properties like
                valid
                invalid
                dirty
                prestine
                touched
                errors

        Model Driven Forms / Reactive forms

            1. are constructed partly in the component and linked to its template form.
            2. these forms need not be bound to any datamembers, but will retain the data in its internal model.
            3. these forms are advanced and serve complex situations like nested forms.
            4. these forms depend on angular defined validation framework.
            5. the validation framework and FormControls and FormBuilders come from ReactiveFormsModule
            6. The FormControl has the below properties to maanage validation messages
                valid
                invalid
                dirty
                prestine
                touched
                errors

    Angular Component Inter-Communication  Parent-Child

            <parent-comp>
                <child-comp></child-comp>
                <child-comp></child-comp>
                <child-comp></child-comp>
            </parent-comp>

            parent can share data with child through 'attributes'

                @Input()    is used on a field of a component to turn the field into an attribute

                @Component({'selector':'cmp1'})
                class MyComponent{
                    @Input()
                    title:string;
                }

                <cmp1 title=""></cmp1>

            child can emit data thgough events and the parent can handle those events to receive the data.

    rxjs
        ReactiveX JS

        Observable     is an enhanced Promise

        let p = new Promise((resolve,reject)=>{
            //resolve is called to indicate successful completion
            //reject is called to indicate error
        })

        p.then(
            (val)=>{//success callback},
            (err)=>{//error callback}
        )

        let ob = new Observable((observer)=>{
            //observer.next(val)  can emit values continuosly from the job.
            //observer.error(err) is as smae as 'reject'
            //observer.complete() is as smae as 'resolve'
        })

        ob.subscribe(
            (val) => {//callback is in resposne to next},
            (err) => {//callback is in response to error},
            () => {//callback is in response to complete}
        )

    HttpClientModule
    
        HttpClient
            get(url) : Observable
            put(url,reqBody):Observable
            post(url,reqBody):Observable
            delete(url):Observable

        json-server
            accept a .json file and generate fake rest api on the data inside the given .json

    Angular Component Inter-Communication  Non-Parent-Child

        Service act like a bridge of communication 
        for unconnected components .

        As long as the providedIn:'root' of @Injectable decorator
        of a service is true, we will have only one object of the service
        for the whole angular app. A component can write a value to 
        any field of that service, and another compoentn can read
        that field value.

        Subject is a type of Observable from 'rxjs' is used by a compoent 
        to notify another component of an event. AddItemComponent can call next()
        method on the subject and NavBarComponent can subscribe to the subject
        to get notified of the item count in the shopping cart.

    Angular Modules

        1. Root Module
        2. Sub-Module / Feature Module
            a. Domain Module        
            b. Service Module
            c. Routing Module
            d. Routed Module
            e. Widget Module
            f. Shared Module


        Domain Module       is used to represent one domain aspect of an app
                            For a e-commerce app, sales, inventory, order ..etc are domains
                            For a ERP project employee-profiles, accounts, timesheets ..etc are domains
                            For a banking project accounts, loans, cards ..etc are domains

        Service Module      is used to represent a group of services.

        Routing Module      is used to hold the router configuaration.

        Routed Module       is any module that consumes the routing module.

        Widget Module       is a collection of components/pipes/directive
                            that can be used across the current project and 
                            other projects as well.

        Shared Module       is a collection of components/pipes/directive
                            that can be used by other moduels of the same project.



