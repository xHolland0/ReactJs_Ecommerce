using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace API.Entity;

public class Product
{
    public int Id { get; set; }


    [Required]
    public string? Name { get; set; }
    public string? Description { get; set; }
    public decimal Price { get; set; }
    public bool IsActive { get; set; }

    public string? ImageUrl { get; set; }
    public int Stock { get; set; }
}