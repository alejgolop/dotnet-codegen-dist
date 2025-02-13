public static class ${EntitySimpleName}Mapper
{
    public static IEnumerable<${EntitySimpleName}DTO> ConvertToDTO(this IEnumerable<${EntitySimpleName}Model> models)
    {
        return models.Select(s => s.ConvertToDTO());
    }

    public static IEnumerable<${EntitySimpleName}DTO> ConvertToDTO(this IEnumerable<${EntitySimpleName}Entity> entities)
    {
        return entities.Select(s => s.ConvertToDTO());
    }

    public static IEnumerable<${EntitySimpleName}Model> ConvertToModel(this IEnumerable<${EntitySimpleName}DTO> dtos)
    {
        return dtos.Select(s => s.ConvertToModel());
    }

    public static IEnumerable<${EntitySimpleName}Model> ConvertToModel(this IEnumerable<${EntitySimpleName}Entity> entities)
    {
        return entities.Select(s => s.ConvertToModel());
    }

    public static ${EntitySimpleName}DTO ConvertToDTO(this ${EntitySimpleName}Model model)
    {
        return new()
        {
${ModelPropertiesMapping}
        };
    }
    
    public static ${EntitySimpleName}DTO ConvertToDTO(this ${EntitySimpleName}Entity entity)
    {
        return new()
        {
${EntityPropertiesMapping}
        };
    }

    public static ${EntitySimpleName}Model ConvertToModel(this ${EntitySimpleName}Entity entity)
    {
        return new()
        {
${EntityPropertiesMapping}
        };
    }

    public static ${EntitySimpleName}Model ConvertToModel(this ${EntitySimpleName}DTO dto)
    {
        return new()
        {
${DTOPropertiesMapping}
        };
    }

    public static ${EntitySimpleName}Entity ConvertToEntity(this ${EntitySimpleName}Model model)
    {
        return new()
        {
${ModelPropertiesMapping}
        };
    }
}