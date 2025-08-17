import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';
export declare class SupplierService {
    private readonly supplierRepository;
    constructor(supplierRepository: Repository<Supplier>);
    create(createSupplierDto: CreateSupplierDto): Promise<{
        message: string;
        supplier: Supplier;
    }>;
    findAll(): Promise<Supplier[]>;
    findOne(id: number): Promise<{
        message: string;
        supplier: Supplier;
    }>;
    update(id: number, updateSupplierDto: UpdateSupplierDto): Promise<{
        message: string;
        supplier: Supplier;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
