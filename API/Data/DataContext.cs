using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();

    protected override void OnModelCreating(ModelBuilder modelBuilder) //Bu Sayede DbContext Üzerinden Belirli Test Veriler Oluşturuyoruz "Seed Data"
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
            new List<Product>
            {
                new Product{
                Id =1,
                Name="Iphone 15",
                Description="Phone Description",
                ImageUrl="1.jpg",
                Price=800,
                IsActive=true,
                Stock=100
                },

                new Product{
                Id =2,
                Name="Iphone 16",
                Description="Phone Description",
                ImageUrl="2.jpg",
                Price=900,
                IsActive=true,
                Stock=200
                },

                new Product{
                Id =3,
                Name="Iphone 15 Pro",
                Description="Phone Description",
                ImageUrl="3.jpg",
                Price=850,
                IsActive=true,
                Stock=150
                },

                new Product{
                Id =4,
                Name="Iphone 16 Pro",
                Description="Phone Description",
                ImageUrl="4.jpg",
                Price=950,
                IsActive=true,
                Stock=250
                }

            }
        );
    }
}
