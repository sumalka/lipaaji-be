import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('new_arrivals')
export class NewArrivals {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  name: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ length: 500, nullable: true }) // Changed to nullable: true
  image_url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}