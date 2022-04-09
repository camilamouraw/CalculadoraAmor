import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome1=""
  nome2=""
  url="http://lucasreno.kinghost.net/love-calculator/"
  resultado = 0
  mensagem = ""
  //imagem = false
  calculando = false;

  constructor(
    public http: HttpClient,
  ) {}


    async enviarDados() {
      let soma = 0;
      //this.imagem = false
      while (soma != 10) {
        this.resultado = Math.floor(Math.random() * 100 + 1);
        this.calculando = true;
        soma += 1;
        await this.delay(75);
      }
      this.calculando = false;

      
  
    this.http.get<any>(this.url+this.nome1 + "/" + this.nome2).subscribe(
      (resposta:any) =>{
        this.resultado = resposta;
        if(this.resultado < 20) this.mensagem = "Muito iludido tadinho(a)!";
        else if( this.resultado >20 && this.resultado < 40 ) this.mensagem = "0 chances você tem !";
        else if( this.resultado >40 && this.resultado < 60 ) this.mensagem = "Existe chances, mas nada sério";
        else if( this.resultado >60 && this.resultado < 80 ) this.mensagem = "Aproveita ele(a) ta na sua !";
        else this.mensagem = " Oww um casal perfeito !!!"

      }
    );
  }

        delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
}
  
  
}
