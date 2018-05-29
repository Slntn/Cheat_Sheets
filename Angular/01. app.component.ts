
//example 1
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//example 2
@Component({
  selector: 'app-root',
  template: `
    <h1>App<h1>
    <p>Lorem</p>`,
  styles: [`
  h1{
    color: red;
  }`]
})

//Selector
//example 1
@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//HTML code:
<div app-root></div>

//example 2
@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//HTML code:
<div class="app-root"></div>