![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Stencil state store

This is simplified version of state store, adjusted to the needs for the composition of several components
that share and update common state.

Although there are other approaches, like property probing, or state tunneling, this approach is inspired
by [NGXS](https://ngxs.gitbook.io) and based on [RXJS](https://rxjs-dev.firebaseapp.com/).

## Learn by example

Let's say that we have some state that needs to be shared among components:

````
export interface CarouselState {
    page: number;
} 
````

while our composition of components is:

````
<runopencode-carousel>
    
    <runopencode-carousel-stage>
        <img src="example-1.jpg"/>
        <img src="example-2.jpg"/>
        <img src="example-3.jpg"/>
    </runopencode-carousel-stage>
    
    <runopencode-carousel-pager>
    </runopencode-carousel-pager>
    
</runopencode-carousel>
````

Component `runopencode-carousel-stage` is in charge to render and slide those images, 
while `runopencode-carousel-pager` is in charge to display current page. Since those components
are siblings, they can not use property probing approach. Component `runopencode-carousel` could 
provide for them a shared state store, that is, an instance of `StoreInterface` containing 
instance of `CarouselState`.

````
import {Component, h}               from "@stencil/core";
import {Provide, StoreInterface}    from "@runopencode/stencil-state-store";
import {CarouselState}              from "./state";

@Component({
    tag:    'runopencode-carousel',
    shadow: true,
})
export class Carousel {
    
        @Provide({
            name:     'runopencode-carousel',
            defaults: {
                page: 1
            }
        })
        public store: StoreInterface<CarouselState>;
        
        public render() {
            return (
                <slot/>
            );
        }
}
````

Component `runopencode-carousel-pager` can consume that state store:

````
import {Component, h}               from "@stencil/core";
import {Provide, StoreInterface}    from "@runopencode/stencil-state-store";
import {CarouselState}              from "./state";
import {Unsubscribable}             from "rxjs";

@Component({
    tag:    'runopencode-carousel-pager',
    shadow: true,
})
export class CarouselPager {
    
    @State()
    private page: number;
        
    private subscription: Unsubscribable;
    
    @Consume({
        name: 'demo-store'
    })
    public consume(store: StoreInterface<CarouselState>): void {
        this.subscription = this.store.subscribe((state: CarouselState) => {
            this.page = state.page;
        });
    }
    
    public disconnectedCallback(): void {
        this.subscription.unsubscribe();
    }
    
    public render() {
        return (
            <div>
                Current slide is {this.page}
            </div>
        );
    }
}
````

So, there is one few classes, decorators and interfaces involved here.

1. You need to define your state interface. It is simple key, value pair, defined by following:

````
interface MyState {
    [key: string]: any
}
````

2. You have to provide your state store, with default values and unique name from parent component:

````

@Provide({
    name:     'runopencode-carousel',
    defaults: [DEFAULT VALUE FOR YOUR STATE]
})
public store: StoreInterface<MyState>;

````
3. You have to consume your state

````
@Consume({
    name:     'runopencode-carousel',
    callback:  (store: StoreInterface<MyState>) => {
        store.subscribe(...)
    }
})
public store: StoreInterface<ComponentState>;
````

Note that you can consume store trough component property, as well as trough component method. 
If you are using a property for consumption, you can define a callback to invoke when store 
is provided. A callback function will have `this` pointing to that particular component instance.

Trough subscription you can follow changes of state.

Do note that instance of your state store implements `StoreInterface` defined as follows:

````
import {Observable, PartialObserver, Subscribable, Subscription} from "rxjs";

export interface StoreInterface<T> extends Subscribable<T> {

    /**
     * Set state.
     */
    set(state: T): void;

    /**
     * Patch state.
     */
    patch(state: T): void;

    /**
     * Select slice of state.
     */
    select(selector: (state: T | null) => void): Observable<any>;

    /**
     * Get current state.
     */
    snapshot(): T | null;

    /**
     * Subscribe to state change.
     */
    subscribe(next?: PartialObserver<T> | ((value: T) => void)): Subscription;
}
    
```` 

**[WIP] This library is work in progress, tests and better documentation are required**