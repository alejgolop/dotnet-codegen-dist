public class ${EntitySimpleName}EntityConfig : IEntityTypeConfiguration<${EntitySimpleName}Entity>
{
    public void Configure(EntityTypeBuilder<${EntitySimpleName}Entity> builder)
    {
        builder.ToTable("${EntityPluralName}");
        builder.HasKey(e => e.${EntityID});
    ${PropertiesConfiguration}
    }
}