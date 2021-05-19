var faker = require('faker');

function generateEmployees(){
    var employees = [];

    for(var id=0; id<50; id++){
        var name = faker.name.firstName();
        var lastname = faker.name.lastName();
        var email = faker.internet.email();

        employees.push({
            "id": id,
            "name": name,
            "lastname": lastname,
            "email": email
        });
    }

    return {"employees":employees};

}

module.exports = generateEmployees();