import { NgModule } from "@angular/core";
import { SimpleSearchPipe } from "./ssearch.pipe";

@NgModule({
    declarations: [SimpleSearchPipe],
    exports: [SimpleSearchPipe], 
})

export class SimplesearchModule{}