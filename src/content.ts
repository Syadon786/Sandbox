/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
import fs from "fs";
import http from "http";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->
        let age: number = 42;
        let name: string = "Kovács Tibor";
        let isHungarian: Boolean = true;
        let favoruiteMovies: Array<string>;
        favoruiteMovies = ["Star Wars: New Hope", "Pasta vs Human right activist", "SHREK"];
        let sonData: [number, string, boolean, number, string]; // declare tuple variable
        sonData = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable

        res.write("Név (String):");
        res.write(`${name}`);

        res.write("\nÉletkor (Number):");
        res.write(`${age}`);

        res.write("\nMagyar (Boolean):");
        res.write(`${isHungarian}`);

        for (var i = 0; i < favoruiteMovies.length; i++) {
            res.write(favoruiteMovies[i]);
        }
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
