public class ${EntitySimpleName}Repository(${ContextClassName} dbContext) : GenericRepository<${EntitySimpleName}Entity, ${ContextClassName}>(dbContext), I${EntitySimpleName}Repository
{
    public async Task<${EntitySimpleName}Entity> Add(${EntitySimpleName}Entity ${EntitySimpleName})
    {
        await dbContext.AddAsync(${EntitySimpleName});
        return ${EntitySimpleName};
    }

    public async Task Delete(${EntityTypeID} id)
    {
        await Delete(x => x.${EntityID} == id);
    }

    public async Task Edit(${EntitySimpleName}Entity ${EntitySimpleName}, ${EntitySimpleName}Entity new${EntitySimpleName})
    {
        await Update(${EntitySimpleName}, new${EntitySimpleName});
    }

    public async Task<bool> Exists(${EntityTypeID} id)
    {
        var query = from ${EntitySimpleName} in dbContext.Set<${EntitySimpleName}Entity>()
                    where ${EntitySimpleName}.${EntityID} == id
                    select ${EntitySimpleName}.${EntityID};
        return query.Any();
    }

    public async Task<${EntitySimpleName}Entity> FindById(${EntityTypeID} id)
    {
        return await FindAsync(x => x.${EntityID} == id);
    }

    public async Task<IEnumerable<${EntitySimpleName}Entity>> GetAll()
    {
        return await FindAllAsync(x => x != null);
    }
}
