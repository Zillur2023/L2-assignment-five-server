import { Router } from "express"
import { UserRouters } from "../modules/user/user.route"
import { ServiceRouters } from "../modules/service/service.route"
import { SlotRoutes } from "../modules/solt/slot.route"
import { BookingRoutes } from "../modules/booking/booking.route"
import { AuthRouters } from "../modules/Auth/auth.route"
import { PaymentRoutes } from "../modules/payment/payment.route"
import { ReviewRoutes } from "../modules/review/review.route"


const router = Router()

const moduleRoutes = [
     // {
        // path: '/users',
        // route: UserRouters
    // },
    {
        path: '/user',
        route: UserRouters
    },
    {
        path: '/service',
        route: ServiceRouters
    },
    {
        path: '/slot',
        route: SlotRoutes
    },
    {
        path: '/booking',
        route: BookingRoutes
    },
    {
        path: '/auth',
        route: AuthRouters
    },
    {
        path: "/payment",
        route: PaymentRoutes,
      },
      {
        path: "/review",
        route: ReviewRoutes
      }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router