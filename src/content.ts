/* eslint-disable @typescript-eslint/no-explicit-any */
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
        let sonData: [string, number, boolean];
        sonData = ["Kovács Bálint", 19, true];
        enum accessories {
            AutokSzama = 2,
            TelekSzam = 3,
            Lakcim = "Gönyü xxxx"
        }

        res.write("Név (String):");
        res.write(`${name}`);

        res.write("\nÉletkor (Number):");
        res.write(`${age}`);

        res.write("\nMagyar (Boolean):");
        res.write(`${isHungarian}`);

        res.write("\nKedvenc filmek (Array): ");
        for (var i = 0; i < favoruiteMovies.length; i++) {
            res.write("\n\t" + favoruiteMovies[i] + " ");
        }

        res.write("\nFiának adatai (Tuple): ");
        for (var i = 0; i < sonData.length; i++) {
            res.write("\n\t" + sonData[i] + " ");
        }

        res.write("\nÁltalános adatok (enum): ");
        res.write("\n\t" + accessories.AutokSzama);
        res.write("\n\t" + accessories.TelekSzam);
        res.write("\n\t" + accessories.Lakcim);

        res.write("\nAutó (union): ");
        let autoAdatok: string | number;
        autoAdatok = 123;
        res.write("\n\t" + autoAdatok);
        autoAdatok = "4 ajtó";
        res.write("\n\t" + autoAdatok);
        autoAdatok = "Piros";
        res.write("\n\t" + autoAdatok);

        let hazAdatok: any = 20;
        res.write("\nHázadatok (any):");
        res.write("\n\t Házszám: " + hazAdatok);
        hazAdatok = "Temető utca";
        res.write("\n\t Utcanév: " + hazAdatok);

        function kialtas(): void {
            res.write("OSSIAAN!");
        }

        let szobeszed: void = kialtas();
        res.write(szobeszed);
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
