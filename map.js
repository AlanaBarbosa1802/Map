function getAdmins(map) {
    let admins = [];
    for ([Key, value] of map){
        if (value === 'Admin'){
            admins.push(Key);

        }
    }
return admins;
}
 const usuarios = new Map();

 usuarios.set('Luiz', 'Admin');
 usuarios.set('Sthe', 'Admin');
 usuarios.set('Jorge', 'User');
 usuarios.set('Nathalia', 'Admin');

 console.log(getAdmins(usuarios));