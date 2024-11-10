import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { TodoComponent } from './app/todo/todo.component';

bootstrapApplication(AppComponent, {
  providers: [TodoComponent]  // Add TodoComponent here for standalone usage
})
  .catch(err => console.error(err));
