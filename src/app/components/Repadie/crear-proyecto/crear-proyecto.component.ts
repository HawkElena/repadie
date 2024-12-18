import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { guardedExpression } from '@angular/compiler/src/render3/util';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowDown, faSignIn, faSignOut,faDownload, faReceipt, faFilePen, faFileContract, faL, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { read } from 'fs';
import { ObjetoArreglo } from 'src/app/Models/RepadieMenuModel/ObjetoArrModel';
import { ProyectoPriorizadoModel } from 'src/app/Models/RepadieProjectModel/ProyectoPriorizadoModel';
import { ProyectosService } from 'src/app/services/Proyectos/proyectos.service';
import { GetParamGlobalService } from 'src/app/services/utilis.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {
  public faUpload = faFilePen;
  public faEdit = faEdit;
  public faDelete  = faTrash;
  public esCrearPry:boolean= false;
  public esEditarPry:boolean=false;
  public busqueda_titulo:string="Buscar proyectos";
  public arrFiltrosCmb:ObjetoArreglo[]=[];
  public arrCategoriaCmb:ObjetoArreglo[]=[];
  
  public regProyPriorizado =new ProyectoPriorizadoModel( 0,"","","","","", "","",1,"",0,"",0,0,"",0,"");

  // private _currentUser= {
  //   id              : 0
  //   , usuario       : ''
  
  public arrFile ={
    fileName: '',
    fileExtension:'',
    fileText:''
  }

  public base64!:any ;

  public fileSelected?:Blob;
  public isValidDate: boolean= false;
  public error?: { isError: boolean; errorMessage: string; };
  
  constructor(private router:Router
                      ,public proyectosService:ProyectosService
                      ,public transformarFecha: GetParamGlobalService) { }

  ngOnInit(): void {
    this.esCrearPry= true;
    this.esEditarPry = false;
    this.llenaFiltrosCmb();
    this.llenaFiltroCategoria();
    // this.regProyPriorizado._nombre= "hawk is good!";
  }

  llamarHome()
  {
     this.router.navigate(['/home']);
  }

  public llamarCrearProyecto(){
    this.esCrearPry= true;
    this.esEditarPry = false;
  }
  public showForEdit(){
    this.esEditarPry=true;
  }
  public showForDelete(){

  }

  public llenaFiltrosCmb(){
    var tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "1";
    tmpObjFiltroCmb._valor="Codigo"
    tmpObjFiltroCmb._esSeleccionado=""
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrFiltrosCmb.push(tmpObjFiltroCmb);

    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "2";
    tmpObjFiltroCmb._valor="Nombre del Proyecto"
    tmpObjFiltroCmb._esSeleccionado=""
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrFiltrosCmb.push(tmpObjFiltroCmb);
    
    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "3";
    tmpObjFiltroCmb._valor="Fecha Inscripción"
    tmpObjFiltroCmb._esSeleccionado=""
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrFiltrosCmb.push(tmpObjFiltroCmb);
    
    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "3";
    tmpObjFiltroCmb._valor="Libro"
    tmpObjFiltroCmb._esSeleccionado=""
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrFiltrosCmb.push(tmpObjFiltroCmb);
    

  }

  public llenaFiltroCategoria(){
    var tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "1";
    tmpObjFiltroCmb._valor="Infra. Autopistas y carreteras"
    tmpObjFiltroCmb._esSeleccionado="false"
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrCategoriaCmb.push(tmpObjFiltroCmb);

    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "2";
    tmpObjFiltroCmb._valor="Infra. Puertos y Aeropuertos"
    tmpObjFiltroCmb._esSeleccionado="false"
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrCategoriaCmb.push(tmpObjFiltroCmb);
    
    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "3";
    tmpObjFiltroCmb._valor="Educacion publica"
    tmpObjFiltroCmb._esSeleccionado="false"
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrCategoriaCmb.push(tmpObjFiltroCmb);
    
    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "4";
    tmpObjFiltroCmb._valor="Transporte publico"
    tmpObjFiltroCmb._esSeleccionado="false"
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrCategoriaCmb.push(tmpObjFiltroCmb);
    
    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "5";
    tmpObjFiltroCmb._valor="Transporte de carga"
    tmpObjFiltroCmb._esSeleccionado="false"
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrCategoriaCmb.push(tmpObjFiltroCmb);
    
    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "6";
    tmpObjFiltroCmb._valor="Energia"
    tmpObjFiltroCmb._esSeleccionado="false"
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrCategoriaCmb.push(tmpObjFiltroCmb);
    
    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "7";
    tmpObjFiltroCmb._valor="Otros"
    tmpObjFiltroCmb._esSeleccionado="false"
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrCategoriaCmb.push(tmpObjFiltroCmb);
    
  }
  // public guardarProyecto(base64String, fileName){

  //   alert("Click para guardar");
  // }

  public guardarProyecto(){

  }

  public cargarArchivo($event: Event){
    let files :any = $event.target as HTMLInputElement;
    let target = event?.target as HTMLInputElement;
    let file: File=(target.files as FileList)[0];
    this.fileSelected= file;
    this.convertFileToBase64();
  }
 convertFileToBase64():void{
  let reader = new FileReader();
  reader.readAsDataURL(this.fileSelected as Blob);
  reader.onloadend = () =>{
    this.base64 =  reader.result as string;
    // this.regProyPriorizado._archivo= reader.result as string;
  }

 }

 guardarProyectoPriorizado($event:Event){
  
  var guardarRegistro= new ProyectoPriorizadoModel( 0,"","","","","", "","",1,"",0,"",0,0,"",0,"");


  // let dia = this.registroAlumnoService.alumnoSeleccionado.fechaNacimiento.substring(0, 2);
  // let mes = this.registroAlumnoService.alumnoSeleccionado.fechaNacimiento.substring(3, 5);
  // let anio = this.registroAlumnoService.alumnoSeleccionado.fechaNacimiento.substring(6, 10);
  // this.registroAlumnoService.alumnoSeleccionado.fechaNacimiento = anio + '-' + mes + '-' + dia;

  // let dtFechaInicio: any = this.transformarFecha.getFechaFormateada(this.PlanControls[8]._valorSeleccionado);
  // let dtFechaFin: any = this.transformarFecha.getFechaFormateada(this.PlanControls[9]._valorSeleccionado);
  // this.isValidDate = this.validateDates(dtFechaInicio, dtFechaFin);
  // if (!this.isValidDate) {
  //   this.PlanControls[9]._ngModelarr = dtFechaInicio;
  //   this.PlanControls[9]._valorSeleccionado = dtFechaInicio;
  //   this.PlanControls[9]._valTipoControlHTML = dtFechaInicio;
  //   alert("la fecha inicio no puede ser mayor a la fecha fin");
    
  let dtFechaPriorizacion: any = this.transformarFecha.getFechaFormateada(this.regProyPriorizado._fechapriorizado.toString());
  let dtFechaInscripcion: any = this.transformarFecha.getFechaFormateada(this.regProyPriorizado._fechainscripcion.toString());
  this.isValidDate= this.validateDates(dtFechaPriorizacion,dtFechaInscripcion);

  if (
    this.regProyPriorizado._nombre == null ||
    this.regProyPriorizado._nombre == ''
  ) {
    alert('El nombre de proyecto no debe de ser vacio...');
    return;
  }
  if (
    this.regProyPriorizado._puntoacta == undefined ||
    this.regProyPriorizado._puntoacta == ''
  ) {
    alert('El punto de acta no debe de ser vacio...');
    return;
  }
  if(this.regProyPriorizado._archivo == undefined || this.regProyPriorizado._archivo== ""){
    alert("El archivo que selecciono no es valido... o no ha seleccionado uno");
    return;
  }
  if(!this.isValidDate) {alert("Las fechas no deben de ser vacias..."); return;};
  if(this.regProyPriorizado._categoria == undefined || this.regProyPriorizado._categoria.toString() == "" || parseInt(this.regProyPriorizado._categoria.toString())< 1 ){
    alert("No ha seleccionado alguna categoria...");
    return;
  }

  // inicio para llenar el arreglo y guardar
  guardarRegistro.codigo            = 0;
  guardarRegistro._codigomascara    = "PRO";
  guardarRegistro._nombre           =  this.regProyPriorizado._nombre;
  guardarRegistro._puntoacta        = this.regProyPriorizado._puntoacta;
  guardarRegistro._archivo          = this.base64; //this.regProyPriorizado._archivo;
  guardarRegistro._otrosarchivos    = this.regProyPriorizado._otrosarchivos;
  guardarRegistro._fechapriorizado  = dtFechaPriorizacion;  //this.regProyPriorizado._fechapriorizado;
  guardarRegistro._numeroacta       = this.regProyPriorizado._numeroacta;
  guardarRegistro._categoria        = this.regProyPriorizado._categoria;
  guardarRegistro._fechainscripcion = dtFechaInscripcion ; //this.regProyPriorizado._fechainscripcion;
  guardarRegistro._usuariocrea      = 1 //this.regProyPriorizado._usuariocrea;
  guardarRegistro._fechacrea        = dtFechaInscripcion; //this.regProyPriorizado._fechacrea;
  guardarRegistro._codigoproyecto   = this.regProyPriorizado._codigoproyecto;
  guardarRegistro.opcionDML         = 1;
  guardarRegistro.codlast           = this.regProyPriorizado.codlast;
  guardarRegistro._error_id         = this.regProyPriorizado._error_id;
  guardarRegistro._error_msg        = this.regProyPriorizado._error_msg;
  
  // const area = document.getElementById('txtAreaBase64') as HTMLTextAreaElement;
  // guardarRegistro._archivo = area.innerHTML;
  // guardarRegistro._archivo ="";
  
  var xxx = guardarRegistro._archivo.split(",")[1];
  guardarRegistro._archivo = xxx;
  this.proyectosService.getDataService(guardarRegistro,"ProyectoPriorizado").subscribe(
    Response => {
      guardarRegistro = Response[0];
      alert(guardarRegistro._error_msg);
      //hay que limpiar la forma despues que se grabe.
    },error => {
      alert("Hubo un error al guardar el registro..." + error?.message);
    }
  )


 }

 validateDates(sDate: string, eDate: string){
  this.isValidDate = true;
  if((sDate == null || eDate ==null)){
    this.error={isError:true,errorMessage:'Los campos fecha no deben de ser vacias'};
    this.isValidDate = false;
  }

  // if((sDate != null && eDate !=null) && (eDate) < (sDate)){
  //   this.error={isError:true,errorMessage:'End date should be grater then start date.'};
  //   this.isValidDate = false;
  // }
  return this.isValidDate;
}
}
