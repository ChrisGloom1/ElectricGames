using Microsoft.EntityFrameworkCore;
using GameCharacterApi.Models;

var builder = WebApplication.CreateBuilder(args);

// registering database with the name GameCharacters
builder.Services.AddDbContext<GameCharacterContext>(options =>
  options.UseSqlite("Data Source=GameCharacters.db"));

// configure cors
builder.Services.AddCors(
  options =>
  {
    options.AddPolicy("AllowAll",
      builder => builder
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin()
    );
  }
);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

DefaultFilesOptions options = new DefaultFilesOptions();
options.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(options);

// open up for static webpages (wwwroot)
app.UseStaticFiles();
// activate cors configuration called "AllowAll"
app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
