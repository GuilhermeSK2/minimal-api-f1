import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

//Configuração do CORS
// Permite que o servidor aceite requisições de qualquer origem
server.register(cors, {
    origin: "*",
});


const teams = [
    { id: 1, name: "Scuderia Ferrari", base: "Maranello, Italia" },
    { id: 2, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Mercedes", base: "Northamptonshire, United Kingdom" },
    { id: 5, name: "Racing Bulls", base: "Faença, Italia" },
    { id: 6, name: "Williams", base: "Oxfordshire, United Kingdom" },
    { id: 7, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 8, name: "Alpine", base: "Oxfordshire, United Kingdom" },
    { id: 9, name: "Haas", base: "North Carolina, United States" },
    { id: 10, name: "Sauber", base: "Zurich, Switzerland" },
];

const drivers = [
    { id: 1, name: "Charles Leclerc", team: "Scuderia Ferrari" },
    { id: 2, name: "Lewis Hamilton", team: "Scuderia Ferrari" },
    { id: 3, name: "Lando Norris", team: "McLaren" },
    { id: 4, name: "Oscar Piastri", team: "McLaren" },
    { id: 5, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 6, name: "Yuki Tsunoda", team: "Red Bull Racing" },
    { id: 7, name: "George Russel", team: "Mercedes" },
    { id: 8, name: "Kimi Antonelli", team: "Mercedes" },
    { id: 9, name: "Liam Lawson", team: "Racing Bulls" },
    { id: 10, name: "Isaac Hadjar", team: "Racing Bulls" },
    { id: 11, name: "Carlos Sainz", team: "Williams" },
    { id: 12, name: "Alex Albon", team: "Williams" },
    { id: 13, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 14, name: "Lance Stroll", team: "Aston Martin" },
    { id: 15, name: "Pierre Gasly", team: "Alpine" },
    { id: 16, name: "Jack Doohan", team: "Alpine" },
    { id: 17, name: "Esteban Ocon", team: "Haas" },
    { id: 18, name: "Oliver Bearman", team: "Haas" },
    { id: 19, name: "Nico Hulkemberg", team: "Sauber" },
    { id: 20, name: "Gabriel Bortoleto", team: "Sauber" },
];

//Teams endpoint

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return teams;
});

interface TeamParams {
    id: string
}

server.get<{Params: TeamParams}>("/teams/:id", async(request, response) => {
    const id = parseInt(request.params.id);
    const team = teams.find(d => d.id === id);

    if (!team) {
        response.type("application/json").code(404);
        return { error: "Team not found" };
    } else {
        response.type("application/json").code(200);
        return {team};
    }
})

//Drivers endpoint

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return drivers;
});

interface DriverParams {
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id);

    if (!driver) {
        response.type("application/json").code(404);
        return { error: "Driver not found" };
    } else {
        response.type("application/json").code(200);
        return {driver};
    }
})

server.listen({ port: 3333 }, () => {
    console.log("Server init");
});
