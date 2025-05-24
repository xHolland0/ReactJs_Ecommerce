using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions<DataContext> options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
            new List<Product>
            {
                new Product
                {
                    Id=1,
                    Name="Iphone 15",
                    Description="Iphone 15 Description",
                    ImageUrl= "Iphone1.jpg",
                    Price=12.99m,
                    Stock=15,
                    IsActive=true,
                },
                
                new Product
                {
                    Id=2,
                    Name="Iphone 16",
                    Description="Iphone 16 Description",
                    ImageUrl= "Iphone2.jpg",
                    Price=15.99m,
                    Stock=13,
                    IsActive=true,
                },
                
                new Product
                {
                    Id=3,
                    Name="Iphone 16 Pro Max",
                    Description="Iphone 16 Pro Max Description",
                    ImageUrl= "Iphone3.jpg",
                    Price=18.99m,
                    Stock=12,
                    IsActive=true,
                },
                
                new Product
                {
                    Id=4,
                    Name="Iphone 16 Pro",
                    Description="Iphone 16 Pro Description",
                    ImageUrl= "Iphone4.jpg",
                    Price=19.99m,
                    Stock=18,
                    IsActive=true,
                }
                   
            }
        );
    }
}