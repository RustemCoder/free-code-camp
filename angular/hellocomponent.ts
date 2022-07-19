


@Component({
selector:'app-root',
templateUrl:'./app.component.html',
styleUrls:'./app.component.css'
})

export class AppComponent{
title = "Hello world!"

getMin(a,b){
  if(a<b){
  return a;
  else{
  return b;
}
