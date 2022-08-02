import { v4 as uuidV4 } from "uuid";
import { hash } from "bcryptjs";
import createConnection from "../index";
//createConnection();

async function create() {
    const connection = await createConnection("localhost");
    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(
        `INSERT INTO USERS(id,name,email,password,created_at,updated_at)
        values('${id}','admin','admin@festivalparty.com.br','${password}','now()','now()')
        `
    )

    await connection.close;
 

}


create().then(() => {
    console.log("User admin created!");
}) 