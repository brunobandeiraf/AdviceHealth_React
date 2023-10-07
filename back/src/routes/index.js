const { Router } = require("express");

const usersRoutes = require("./users.routes.js")

const routes = Router()

const sessionsRouter = require("./sessions.routes")
routes.use("/sessions", sessionsRouter)

routes.use("/users", usersRoutes)

module.exports = routes