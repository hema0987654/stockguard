import { Controller, Get } from '@nestjs/common';

@Controller('')
export class RoutmainController {
  @Get()
  main() {
    return { message: "main" }; 
  }
}
