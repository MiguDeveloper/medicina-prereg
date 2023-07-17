$(document).ready(function () {
  const initTipoDocumento = () => {
    tiposDeDocumento.forEach((tipoDocumento) => {
      $('#tipoDocumento').append(
        `<option value="${tipoDocumento.id}">${tipoDocumento.nombre}</option>`
      );
    });
  };

  const initCategorias = () => {
    categoriasDePago.forEach((categoria) => {
      $('#categoriaDePago').append(
        `<option value="${categoria.id}">${categoria.categoria}</option>`
      );
    });
  };

  const initCuotas = () => {
    nroDeCuotas.forEach((cuota) => {
      $('#nroDeCuotas').append(
        `<option value="${cuota.id}">${cuota.cuota}</option>`
      );
    });
  };

  $('.showmodalTerms').click(function (evt) {
    Swal.fire({
      title: TITULO_TERMINOS,
      html: TERMINOSCONDICIONES,
      confirmButtonText: 'Aceptar',
      customClass: {
        title: 'title--color-secondary',
        confirmButton: 'btn-modal--confirm',
      },
      buttonsStyling: false,
    });
  });

  $('.showModalPolitics').click(function (evt) {
    Swal.fire({
      title: TITULO_POLITICAS,
      html: POLITICASDATOS,
      confirmButtonText: 'Aceptar',
      customClass: {
        title: 'title--color-secondary',
        confirmButton: 'btn-modal--confirm',
      },
      buttonsStyling: false,
    });
  });

  $.validator.addMethod(
    'emailfull',
    function (value, element) {
      return (
        this.optional(element) ||
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value)
      );
    },
    'Formato correo no valido'
  );

  const initDatePicker = () => {
    $('#fechaNacimiento').datepicker({
      dateFormat: 'dd/mm/yy',
      changeMonth: true,
      changeYear: true,
      yearRange: '-45:+0',
      dayNames: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
      ],
      dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      firstDay: 1,
      gotoCurrent: true,
      monthNamesShort: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Deciembre',
      ],
    });
  };

  const initRules = () => {
    const RULES = {
      nombres: {
        required: true,
      },
      apePaterno: {
        required: true,
      },
      apeMaterno: {
        required: true,
      },
      apeMaterno: {
        required: true,
      },
      tipoDocumento: {
        required: true,
      },
      nroDocumento: {
        required: true,
        number: true,
        minlength: function () {
          return $('#tipoDocumento').val() === 'DNI' ? 8 : 12;
        },
        maxlength: function () {
          return $('#tipoDocumento').val() === 'DNI' ? 8 : 12;
        },
      },
      fechaNacimiento: {
        required: true,
      },
      celular: {
        required: true,
        number: true,
      },
      email: {
        required: true,
        emailfull: true,
      },
      categoriaDePago: {
        required: true,
      },
      nroDeCuotas: {
        required: true,
      },
    };

    return RULES;
  };

  const initMessages = () => {
    const CAMPO_REQUERIDO = 'Campo requerido';
    const MESSAGES = {
      nombres: {
        required: CAMPO_REQUERIDO,
      },
      apePaterno: {
        required: CAMPO_REQUERIDO,
      },
      apeMaterno: {
        required: CAMPO_REQUERIDO,
      },
      tipoDocumento: {
        required: CAMPO_REQUERIDO,
      },
      nroDocumento: {
        required: CAMPO_REQUERIDO,
        number: 'Solo digitos númericos',
        minlength: function () {
          return $('#tipoDocumento').val() === 'DNI'
            ? 'Mínimo 8 digitos'
            : 'Mínimo 12 digitos';
        },
        maxlength: function () {
          return $('#tipoDocumento').val() === 'DNI'
            ? 'Máximo 8 digitos'
            : 'Máximo 12 digitos';
        },
      },
      fechaNacimiento: {
        required: CAMPO_REQUERIDO,
      },
      email: {
        required: CAMPO_REQUERIDO,
        email: 'Formato correo no valido',
      },
      categoriaDePago: {
        required: CAMPO_REQUERIDO,
      },
      celular: {
        required: CAMPO_REQUERIDO,
        number: 'Solo digitos númericos',
      },
      nroDeCuotas: {
        required: CAMPO_REQUERIDO,
      },
    };

    return MESSAGES;
  };

  $('#frmRegistro').validate({
    ignore: '',
    rules: initRules(),
    messages: initMessages(),
    submitHandler: function (form, event) {
      event.preventDefault();
      const data = $('#frmRegistro').serializeArray();
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Tus datos fueron registrados correctamente',
        confirmButtonColor: 'crimson',
        focusConfirm: false,
      });
    },
    invalidHandler: function (event, validator) {
      console.log('fomulario invalido: campos requeridos');
      event.preventDefault();
      Swal.fire({
        icon: 'warning',
        title: 'Debes de ingresar todos los campos requeridos',
        confirmButtonColor: 'crimson',
        focusConfirm: false,
        confirmButtonText: 'Aceptar',
      });
    },
  });

  initTipoDocumento();
  initCategorias();
  initCuotas();
  initDatePicker();
});
