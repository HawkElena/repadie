import { Byte } from "@angular/compiler/src/util";

export class ProyectoPriorizadoModel{
    constructor(

            public codigo            	:number,
			public _codigomascara 		:String,
			public _nombre           	:String,
			public _puntoacta           :String,
			public _archivo          	:String,
			public _otrosarchivos 		:String,
			public _fechapriorizado		:String,
			public _numeroacta          :String,
			public _categoria           :number,
			public _fechainscripcion 	:String,
			public _usuariocrea         :number,
			public _fechacrea           :String,			
			public _codigoproyecto 		:number,
			public opcionDML         	:number,
			public codlast           	:String,
			public _error_id         	:number,
			public _error_msg           :String,
       
    ){
        
    }
}