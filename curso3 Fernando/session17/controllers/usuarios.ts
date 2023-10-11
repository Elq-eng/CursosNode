import { Request,Response } from "express";
import Usuario from '../models/usuario';



export const getUsuarios = async ( req: Request, res: Response )=>{


  const usuarios = await Usuario.findAll()

    res.json( { usuarios } )
}

export const getUsuario = async( req: Request, res: Response )=>{

  const { id } = req.params

  const usuario = await Usuario.findByPk( id )

  if ( !usuario ){
    res.status( 404 ).json({msg:`El usuario no existe con el id, ${id} ` })
  }
  res.json({ usuario })
}

export const postUsuario = async( req: Request , res: Response ) => {

  

  try {
      const { body } = req;
      const existeEmail = await Usuario.findOne({
          where: {
              email: body.email
          }
      });

      if (existeEmail) {
          return res.status(400).json({
              msg: 'Ya existe un usuario con el email ' + body.email
          });
      }


      const usuario = new Usuario(body);
      await usuario.save();

      res.json( usuario );


  } catch (error) {

      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })    
  }
}

export const putUsuarios = async( req: Request, res: Response )=>{

  const { id } = req.params;
  const { body } = req;
  try {

    const usuario = await Usuario.findByPk( id )
    if (!usuario) {
        return res.status(404).json({
            msg: 'El usuario no existe con ese id'
        });
    }

    await usuario.update(body);
    res.json( usuario)


} catch (error) {

    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    })    
}
  
}

export const deleteUsuarios = async( req: Request, res: Response )=>{

  const { id } = req.params;
  
  const usuario = await Usuario.findByPk( id )
    if (!usuario) {
        return res.status(404).json({
            msg: 'El usuario no existe con ese id'
        });
    }
  
  // await usuario.destroy()

  await usuario.update({ estado: false})

  res.json({
    msg: 'El usuario ha sido eliminado'
  })
}