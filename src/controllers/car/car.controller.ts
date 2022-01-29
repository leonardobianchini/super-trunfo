import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/models/car.model';
import { Repository } from 'typeorm';

@Controller('cars')
export class CarController {

  constructor(
    @InjectRepository(Car)
    private carRepo: Repository<Car>
  ) {}

  @Get()
  index() {
    return this.carRepo.find();
  }

  @Get(':id')
  showOne(@Param('id') id: string) {
    return this.carRepo.findOne(id);
  }
  
  @Post()
  store(@Body() body: Car) {
    const car = this.carRepo.create(body);
    return this.carRepo.save(car);
  }
}
