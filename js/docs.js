const tiposDeDocumento = [
  { id: 'DNI', nombre: 'DNI' },
  { id: 'CE', nombre: 'CE' },
];

const categoriasDePago = [
  { id: 'A', categoria: 'A' },
  { id: 'B', categoria: 'B' },
  { id: 'C', categoria: 'C' },
  { id: 'D', categoria: 'D' },
];

const nroDeCuotas = [{ id: '5', cuota: '5' }];

const TITULO_TERMINOS = 'Beca Medicina UPC: Términos y Condiciones 2023';
const TITULO_POLITICAS =
  'Proceso Medicina UPC - Postulantes: Política de tratamiento de datos personales';
const TERMINOSCONDICIONES = `
<ul class="lista listRoman">
  <li><span class="text-modal-bold">INSTRUCCIONES GENERALES</span> <br>
    Para poder realizar su evaluación socioeconómica, usted deberá de cumplir 
    con lo estipulado en el Reglamento de la Universidad y con las siguientes 
    especificaciones:
    <ul class="listDecimal">
    <li>Haber realizado el pre-registro.</li>
    <li>Verificar el correo consignado en el pre-registro, puesto que apenas termines este proceso te llegará tu usuario y contraseña de acceso a la plataforma SABE.</li>
    <li>Completar los datos solicitados en la plataforma web en un plazo máximo de 48 horas hábiles después de recibir las credenciales SABE (Sistema de Administración de Beneficios Económicos).</li>
    <li>Adjuntar en la plataforma web los documentos solicitados, respetando las especificaciones de envío:    
      <ul>
        <li>El archivo debe ser escaneado en JPG o PDF.</li>
        <li>Peso del archivo no debe ser mayor a 2 MB.</li>
        <li>El nombre del archivo escaneado y guardado en su computador no debe ser muy largo y no debe contener más de 20 caracteres (contando espacios) ni registrar signos o símbolos (¡” #$%&/ () =? _-[]¨* ). Ejemplo: DNIMADRE, DNIPOSTULANTE, etc.</li>
      </ul>
    </li>
    <li>Tomar en consideración que toda la documentación presentada tiene carácter de Declaración Jurada, la cual podrá ser verificada en cualquier momento a través de diferentes fuentes de información. Si se encontrara información que no fue declarada en la solicitud, podrá obtener una respuesta de NO PROCEDENTE.</li>
    <li>Debe dar click en <span class="text-modal-bold">"Enviar Solicitud"</span> para que podamos evaluar su solicitud. Es importante considerar que, una vez enviada la solicitud, esta no podrá ser modificada.</li>
    <li>Se le podrá consultar información adicional a través de llamada telefónica, es importante brindarla y dar facilidades para la misma.</li>
    </ul>
  </li>
  <li><span class="text-modal-bold">REQUISITOS OBLIGATORIOS</span><br>
  Deberás adjuntar la documentación previamente escaneada. Es importante que toda la documentación esté clara. En caso tú mismo seas el responsable económico (postulante), deberás presentar únicamente tu información y la de tu núcleo familiar actual 
  (conviviente o casado y/o hijos). 
  <br>
  <br>
  La documentación requerida para los postulantes y responsables económicos es la siguiente:
    <ul class="listDecimal">
      <li>Documento de Identidad (DNI/LE/CE) del padre, madre, postulante, cónyuge, hermanos dependientes, hijos y/o responsables económicos.</li>
      <li>El responsable de la economía familiar (padre, madre, postulante, cónyuge, hermanos) deberá presentar los siguientes documentos de acuerdo a su tipo de ingreso mensual:
        <ul>
          <li><span class="text-modal-bold">Dependiente:</span> tres (3) últimas boletas de pago a la fecha actual.</li>
          <li><span class="text-modal-bold">Independiente:</span> reporte de recibos por honorarios electrónicos emitidos en los últimos seis meses a la fecha actual.</li>
          <li><span class="text-modal-bold">Pensionistas:</span> tres (3) últimas boletas de pensión a la fecha actual.</li>
          <li><span class="text-modal-bold">Negocio Propio:</span> PDT completo (3 a 4 hojas por mes) o voucher RUS de los tres (3) últimos meses a la fecha actual.</li>
          <li><span class="text-modal-bold">Ingresos por alquiler de inmueble o renta de auto:</span> contrato de alquiler de estos.</li>
          <li><span class="text-modal-bold">Remesas familiares:</span> voucher de los tres (3) últimos meses a la fecha actual.</li>
          <li><span class="text-modal-bold">Trabajadores informales:</span> declaración jurada de ingresos, en la cual indique la actividad y el ingreso promedio.</li>
          <li><span class="text-modal-bold">Responsable económico en desempleo:</span> liquidación de trabajo y/o carta de cese.</li>
          <li><span class="text-modal-bold">Todo miembro del hogar que cuente con RUC activo</span> (verificar con su DNI en <a href="https://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/jcrS00Alias" target="_blank">https://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/jcrS00Alias</a>): Presentar Reporte Tributario del último año.      </li>
        </ul>
      </li>
      <li>Último recibo de servicios de luz, agua y/o teléfono de la vivienda donde residen (cualquiera de los servicios).</li>  
    </ul>
  <br>Asimismo, <span class="text-modal-bold">si consideras que cuentas con otros documentos adicionales que sustenten o expliquen mejor tu economía familiar y no estén detallados en el punto II. REQUISITOS OBLIGATORIOS, pueden ser adjuntados en la plataforma SABE > Archivos Adjuntos como “Otros”.</span>
  </li>
  <li><span class="text-modal-bold">RESULTADOS</span> 
    <br> Los resultados serán brindados por parte del área Admisión UPC.
    </li>
  <li><span class="text-modal-bold">NOTAS ADICIONALES</span>
    <br>
    El padre, madre de familia, postulante o responsable de la economía familiar deberá llenar los campos solicitados de la plataforma web, sobre todo aquellos de carácter obligatorio y de relevancia para la evaluación del beneficio.
    <br>
    <br>
    La información solicitada y los documentos que la respaldan son requisitos obligatorios para proceder con la evaluación socioeconómica.
    <br>
    <br>
    Pueden recibir llamadas telefónicas del Evaluador Socioeconómico que está a cargo del estudio de su caso.
    <br>
    <br>
    Toda la información que se consigan tanto en la plataforma SABE como en el Pre - registro es únicamente empleado para fines relacionados al proceso de Evaluación Socioeconómica.
    <br>
    <br>
    En caso de consultas o dudas respecto al proceso o el llenado web, comunicarse a
    <ul>
      <li><span class="text-modal-bold">Central Telefónica:</span> 471-7396 (llamadas telefónicas)</li>
      <li><span class="text-modal-bold">WhatsApp:</span> +01 4717396</li>
      <li><span class="text-modal-bold">Horario de atención:</span> De lunes a viernes de 9:00 a.m. a 1:00 p.m. y de 2:00 p.m. a 5:00 p.m.</li>
    </ul>
    <br>
    Se informa que la asignación del beneficio se resuelve atendiendo a criterios socioeconómicos de estricta priorización y de acuerdo con la problemática de los casos presentados. La evaluación del beneficio se efectuará siempre y cuando cumpla con todo lo mencionado anteriormente, de lo contrario podría tener una respuesta de NO PROCEDENTE.
    <br>
    <br>
    La evaluación es imparcial y es realizada por el Instituto Peruano de Fomento Educativo (IPFE), que cuenta con 61 años de experiencia en procesos de evaluación.
  </li>  
</ul>
`;

const POLITICASDATOS = `
  <p>Si, he leído y presto mi consentimiento a los <span class="text-modal-bold">Términos y condiciones del Proceso de Medicina UPC - Postulantes</span> y al procesamiento, al tratamiento y a la transferencia de mis datos personales conforme a lo dispuesto en la <span class="text-modal-bold">Política de tratamiento de datos personales del Proceso de Medicina UPC - Postulantes.</span></p>
  <p>En la UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS S.A.C. (en adelante, UPC), identificada con R.U.C. N° 20211614545, domiciliada en Prolongación Primavera 2390, Monterrico, Santiago de Surco nos preocupamos por la protección y privacidad de los datos personales de nuestros postulantes.</p>
  <p>Por ello, garantizamos la absoluta confidencialidad de tus datos y empleamos altos estándares de seguridad. Estamos legalmente autorizados a tratar la información necesaria (personal, de contacto-como nombre completo, fecha de nacimiento, número de documento oficial de identidad, número de celular, teléfono, correo electrónico, categoría de pago y número de cuotas) que tenga por finalidad identificar a los usuarios que deseen postular al Proceso de Medicina UPC - Postulantes y así validar que cumplan con todos los requisitos para participar del proceso de evaluación socioeconómica. Para garantizar la adecuada ejecución de nuestra relación, es necesario que tu información se encuentre siempre actualizada. Por tanto, deberás mantener actualizada tu información o actualizarla cada vez que sea requerida, sin perjuicio que nosotros, con tu consentimiento previo, podamos actualizar, validar o complementar a partir de fuentes legítimas públicas o privadas permitidas, a las que podamos tener acceso en el curso regular de las operaciones que mantengas con nosotros. Las comunicaciones que te podremos remitir estarán dentro del marco de la ejecución de la relación y/o su preparación para el Proceso de Medicina UPC - Postulantes. De acuerdo con la Ley N.º 29733 – Ley de Protección de Datos Personales y su Reglamento aprobado por el Decreto Supremo Nº003-2013-JUS, así como las normas que las modifican o sustituyan.</p>
  <p>Te informamos que tus datos personales serán almacenados en el banco de datos “Admisión” (Reg. 15236) para la ejecución del Proceso de Medicina UPC - Postulantes, la UPC podrá conservar y tratar tu información por el tiempo necesario para cumplir con las finalidades antes descritas. </p>
  <p>La UPC podrá tratar los datos personales de sus postulantes, directamente o podrá contratar a terceros para la realización de las finalidades antes indicadas, los cuales pueden encontrarse dentro o fuera del Perú. Asimismo, la UPC y estos terceros han adoptado las medidas de seguridad, técnicas, legales y organizativas necesarias para resguardar los datos personales.</p>
  <p>La lista actualizada de estos terceros puede ser ubicada en el enlace web https://upc.edu.pe/proteccion-de-datos/, cualquier variación de los terceros que pudieran dar tratamiento a su información constará en el mencionado enlace y, de ser el caso, requeriremos su consentimiento</p>
  <p>Finalmente, UPC garantiza el ejercicio de tus derechos de Acceso, Rectificación, Cancelación, Oposición y los demás contenidos en la Ley de Protección de Datos Personales, Ley 29733, y su Reglamento, Decreto Supremo 003-2013-JUS. Para ello, podrás dirigir una comunicación gratuita al siguiente enlace web https://encuestasupc.typeform.com/to/RmJwxz14?typeform-source=upc.edu.pe. En caso consideres que tus derechos ARCO no han sido atendidos, puedes presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales dirigiéndose a la Mesa de Partes del Ministerio de Justicia y Derechos Humanos ubicado en Calle Scipión Llona N° 350, Miraflores, Lima, Perú.</p>
  <p>Las condiciones de tratamiento de sus datos personales en la plataforma SABE (Sistema de Administración de Beneficios Educativos) son determinadas por el encargado de tratamiento, IPFE y se aplicará su Política de Privacidad disponible 
  <a href="https://ipfe.org.pe/politicas-reglamentos-y-normas/" target="_blank">aquí</a>.</p>
`;
