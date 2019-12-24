import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string ): any {

    let url = URL_SERVICIOS + '/img';

    if (!img) {
      return url + '/paquete/xxx'
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'paquete':
        url += '/paquete/' + img;
        break;

      case 'promo':
        url += '/promo/' + img;
        console.log('Tipo de imagen no existe, paquete, servicio, promo');
        break;

      case 'servicio':
        url += '/servicio/' + img;
        break;

      default:
        console.log('Tipo de imagen no existe, paquete, servicio, promo');
        url += '/paquete/xx'
    }

    return url;
  }

}
