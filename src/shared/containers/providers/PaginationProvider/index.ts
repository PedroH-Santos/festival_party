import { container } from "tsyringe"
import { PaginationProvider } from "./implementations/PaginationProvider"

import { IPaginationProvider } from "./IPaginationProvider"



container.registerSingleton<IPaginationProvider>(
    "PaginationProvider",
    PaginationProvider
)
