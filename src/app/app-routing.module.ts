import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { ItemComponent } from "./inventory/item/item.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'addItem', component:ItemComponent},
  {path: 'editItem', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}