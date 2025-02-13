internal sealed class GetAll${EntityPluralName}QueryHandler(I${EntitySimpleName}Repository ${EntitySimpleName}Repository) : IQueryHandler<GetAll${EntityPluralName}Query, All${EntityPluralName}Response>
{
    private readonly I${EntitySimpleName}Repository _${EntitySimpleName}Repository = ${EntitySimpleName}Repository ?? throw new ArgumentNullException(nameof(${EntitySimpleName}Repository));

    public async Task<Result<All${EntityPluralName}Response>> Handle(GetAll${EntityPluralName}Query request, CancellationToken cancellationToken)
    {
        var entities = await _${EntitySimpleName}Repository.GetAll();

        var ${EntityPluralName}DTO = entities.ConvertToDTO();
        var response = new All${EntityPluralName}Response(${EntityPluralName}DTO);
        return Result.Success(response);
    }
}
