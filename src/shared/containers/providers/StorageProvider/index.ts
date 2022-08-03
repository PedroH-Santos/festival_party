import { container } from "tsyringe"
import { LocalStorageProvider } from "./implementations/LocalStorageProvider"
import { S3StorangeProvider } from "./implementations/S3StorageProvider"
import { IStorageProvider } from "./IStorageProvider"


const diskStorage = {
    local: LocalStorageProvider,
    s3: S3StorangeProvider,
}

container.registerSingleton<IStorageProvider>(
    "StorageProvider",
    diskStorage[process.env.disk]
)
