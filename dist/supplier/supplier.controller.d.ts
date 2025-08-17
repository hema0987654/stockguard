import { SupplierService } from './supplier.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
export declare class SupplierController {
    private readonly supplierService;
    constructor(supplierService: SupplierService);
    create(createSupplierDto: CreateSupplierDto): Promise<{
        message: string;
        supplier: import("./entities/supplier.entity").Supplier;
    }>;
    findAll(): Promise<import("./entities/supplier.entity").Supplier[]>;
    findOne(id: number): Promise<{
        message: string;
        supplier: import("./entities/supplier.entity").Supplier;
    }>;
    update(id: number, dto: UpdateSupplierDto): Promise<{
        message: string;
        supplier: import("./entities/supplier.entity").Supplier;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
