import { Injectable } from '@angular/core';
import { FotoHeroe } from '../interfaces/fotosHeroe.interface';

@Injectable({
  providedIn: 'root'
})
export class FotosHeroeServiceService {

  fotosHeroes: FotoHeroe[] = [
    {
      idHeroe: 1,
      urlFoto: 'https://media.revistagq.com/photos/65801b7d4260d71797b69845/16:9/w_2560%2Cc_limit/IMG_0240.jpeg',
      id: 1,
    },
    {
      idHeroe: 1,
      urlFoto: 'https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2018-07/aquaman_1_0.jpg.webp?VersionId=_hKfLv1y1D_7eK.d.Vh_oSTE8_ZPStdC&itok=0gC2R_8X',
      id: 2,
    },
    {
      idHeroe: 1,
      urlFoto: 'https://static.eldiario.es/clip/558a6e0d-6c94-478d-9511-30a66f09a92d_16-9-discover-aspect-ratio_default_0.jpg',
      id: 3,
    },
    {
      idHeroe: 1,
      urlFoto: 'https://www.xtrafondos.com/wallpapers/aquaman-y-el-reino-perdido-12028.jpg',
      id: 4,
    },
    {
      idHeroe: 2,
      urlFoto: 'https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/02/the-batman-2.jpg',
      id: 5,
    },
    {
      idHeroe: 2,
      urlFoto: 'https://www.consumidorglobal.com/uploads/s1/23/05/48/batman.jpeg',
      id: 6,
    },
    {
      idHeroe: 2,
      urlFoto: 'https://s1.elespanol.com/2022/03/01/actualidad/653945336_222313463_1706x960.jpg',
      id: 7,
    },
    {
      idHeroe: 2,
      urlFoto: 'https://onlygames.com.ar/wp-content/uploads/2019/10/Batman-Arkham-Legacy.jpg',
      id: 8,
    },
    {
      idHeroe: 3,
      urlFoto: 'https://www.mundodeportivo.com/alfabeta/hero/2022/08/Marvel-ha-revelado-cual-es-la-debilidad-de-Daredevil.jpg?width=1200',
      id: 9,
    },
    {
      idHeroe: 3,
      urlFoto: 'https://i.pinimg.com/originals/86/d0/ef/86d0efb105f285526ccbf8a656187154.png',
      id: 10,
    },
    {
      idHeroe: 3,
      urlFoto: 'https://3.bp.blogspot.com/-0x00FMnqMAk/WCf5zGZt53I/AAAAAAAACMs/hg7j73XhiyQaulMXHBEsmn9WkxT872dywCK4B/s1600/DaredevilWallpaperHD_MarvelSpoilerOficial.png',
      id: 11,
    },
    {
      idHeroe: 3,
      urlFoto: 'https://animalpolitico.com/_next/image?url=https%3A%2F%2Fap-cdn.sfo3.cdn.digitaloceanspaces.com%2Fuploads%2F2023%2F10%2Freboot-daredevil-born-again-escritores-1024x683.jpg&w=3840&q=75',
      id: 12,
    },
    {
      idHeroe: 4,
      urlFoto: 'https://www.mundodeportivo.com/alfabeta/hero/2022/04/Marvel-ha-revelado-la-forma-mas-poderosa-y-temible-de-Hulk.jpg?width=1200',
      id: 13,
    },
    {
      idHeroe: 4,
      urlFoto: 'https://wallpapers-clan.com/wp-content/uploads/2024/02/marvel-hulk-dark-green-comics-desktop-wallpaper-preview.jpg',
      id: 14,
    },
    {
      idHeroe: 4,
      urlFoto: 'https://wallpapercave.com/wp/wp6556154.jpg',
      id: 15,
    },
    {
      idHeroe: 4,
      urlFoto: 'https://sm.ign.com/t/ign_es/blogroll/t/thor-ragna/thor-ragnarok-character-posters_rn7k.1280.jpg',
      id: 16,
    },
    {
      idHeroe: 5,
      urlFoto: 'https://multiplayer.net-cdn.it/thumbs/images/2011/04/05/approved_gl_screen01_watermarked_jpg_1366x768_crop_q85.jpg',
      id: 17,
    },
    {
      idHeroe: 5,
      urlFoto: 'https://e1.pxfuel.com/desktop-wallpaper/947/786/desktop-wallpaper-green-lantern-new-52-justice-league-green-lantern.jpg',
      id: 18,
    },
    {
      idHeroe: 5,
      urlFoto: 'https://areajugones.sport.es/wp-content/uploads/2016/03/Areajugones-Linterna-Verde.jpg',
      id: 19,
    },
    {
      idHeroe: 5,
      urlFoto: 'https://p4.wallpaperbetter.com/wallpaper/170/239/689/green-lantern-ryan-reynolds-movies-wallpaper-preview.jpg',
      id: 20,
    },
    {
      idHeroe: 6,
      urlFoto: 'https://i.pinimg.com/originals/e3/b0/c8/e3b0c8545b561f6d6c1c3b762e3f782a.jpg',
      id: 21,
    },
    {
      idHeroe: 6,
      urlFoto: 'https://www.xtrafondos.com/wallpapers/spider-man-ps4-3452.jpg',
      id: 22,
    },
    {
      idHeroe: 6,
      urlFoto: 'https://www.mundodeportivo.com/alfabeta/hero/2022/12/peliculas-spider-man.jpg?width=768&aspect_ratio=16:9&format=nowebp',
      id: 23,
    },
    {
      idHeroe: 6,
      urlFoto: 'https://i.ytimg.com/vi/TDHXiThsePg/maxresdefault.jpg',
      id: 24,
    },
    {
      idHeroe: 7,
      urlFoto: 'https://e1.pxfuel.com/desktop-wallpaper/91/87/desktop-wallpaper-wolverine-for-pc-trick-wolverine-pc.jpg',
      id: 25,
    },
    {
      idHeroe: 7,
      urlFoto: 'https://www.1zoom.me/big2/971/242307-Sepik.jpg',
      id: 26,
    },
    {
      idHeroe: 7,
      urlFoto: 'https://revistahush.com/wp-content/uploads/2023/03/wolverine-min.webp',
      id: 27,
    },
    {
      idHeroe: 7,
      urlFoto: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/06/wolverine.jpg?tf=3840x',
      id: 28,
    }

  ]
  
  constructor() { }


  //Metodo que me trae todos los heroes
  getFotosHeroes():FotoHeroe[]{
    return this.fotosHeroes;
  }

  //Metodo que me trae un Heroe
  getUnaFoto(idFoto:number){
    return this.fotosHeroes[idFoto - 1 ];
  }

  getFotosIdHeroe(idHeroe:number):FotoHeroe[]{
    let busquedaFotosHeroes: FotoHeroe[] = [];

    for(let i = 0 ; i < this.fotosHeroes.length ; i++){

      let fotoheroeAComparar = this.fotosHeroes[i];


      if (fotoheroeAComparar.idHeroe == idHeroe ){
        busquedaFotosHeroes.push(fotoheroeAComparar);
      }

    }
    return busquedaFotosHeroes;

  }
  
  
}
