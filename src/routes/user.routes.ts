import { Request, Response, Router } from "express";
import { UserController } from "../controller";


const router:Router = Router();

const userController:UserController = new UserController();

router.get("/", (req:Request,res:Response) =>{

    userController.getAllUsers().then((users:any) =>{
        if (users.length===0) throw new Error("No users found");
        return users
    }).then((data:any)=>{
        res.json(data)
    }).catch((err: any) =>{
        res.status(404).json({message: err.message})
    })

}) 

router.get("/:id", (req:Request,res:Response) => { 
    const pathSegments: string[] = req.path.split('/');
    const id: number = Number(pathSegments[pathSegments.length - 1]); 
    userController.getUser(id)
    .then((user:any)=>{
        res.json(user)
    }).catch((err: any) =>{
        res.status(404).json({message: err.message})
    })
})

router.post("/",(req:Request,res:Response) =>{
    console.log('res', res)
    userController.saveUser(req.body).then((user:any) =>{
        if (user.length===0) throw new Error("Error to save user");
        console.log('res', res)

        return user
    }).then((data:any)=>{
        console.log('res', res)
        res.json(data)
    }).catch((err: any) =>{
        res.status(404).json({message: err.message})
    })
})

router.put("/:id", (req:Request,res:Response) => { 
    const pathSegments: string[] = req.path.split('/');
    const id: number = Number(pathSegments[pathSegments.length - 1]); 

    userController.updateUser(id,req.body)
    .then((user:any)=>{
        if(user[0]===0) throw new Error("Error updating user");
        return res.json("Successfully updated")
    })
    .then((data:any)=>{
        res.json(data)
    }).catch((err: any) =>{
        res.status(404).json({message: err.message})
    })
})

router.delete("/:id", (req:Request,res:Response) => {

    console.log('Entry to delete')
    const pathSegments: string[] = req.path.split('/');
    const id: number = Number(pathSegments[pathSegments.length - 1]); 
    userController.deleteUser(id)
    .then((user:any)=>{
        if(user===0) throw new Error("Error deleting user");
        return res.json("Successfully deleted")
    })
    .then((data:any)=>{
        res.json(data)
    }).catch((err: any) =>{
        res.status(404).json({message: err.message})
    })
})

export default router;
