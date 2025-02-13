public interface I${EntitySimpleName}Repository
{
    Task<${EntitySimpleName}Entity> FindById(${EntityTypeID} id);
    Task<bool> Exists(${EntityTypeID} id);
    Task Delete(${EntityTypeID} id);
    Task<${EntitySimpleName}Entity> Add(${EntitySimpleName}Entity ${EntitySimpleName});
    Task Edit(${EntitySimpleName}Entity ${EntitySimpleName}, ${EntitySimpleName}Entity new${EntitySimpleName});
    Task<IEnumerable<${EntitySimpleName}Entity>> GetAll();

}