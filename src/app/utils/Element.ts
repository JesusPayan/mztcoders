import { NgModel } from "@angular/forms";

export interface Elements{
    label: string,
    type:string,
    name :string,  
    placeholder: string,
    ngmodell:[(NgModel)]
}