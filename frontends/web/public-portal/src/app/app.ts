import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
	imports: [RouterModule],
	selector: "app-root",
	template: `<p>This a test</p>`,
	// templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App {
	protected title = "public-portal";
}
