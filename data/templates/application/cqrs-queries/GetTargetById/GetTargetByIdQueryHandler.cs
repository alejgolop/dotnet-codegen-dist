internal sealed class Get${EntitySimpleName}ByIdQueryHandler(I${EntitySimpleName}Repository ${EntitySimpleName}Repository) : IQueryHandler<Get${EntitySimpleName}ByIdQuery, ${EntitySimpleName}Response>
{
    private readonly I${EntitySimpleName}Repository _${EntitySimpleName}Repository = ${EntitySimpleName}Repository ?? throw new ArgumentNullException(nameof(${EntitySimpleName}Repository));

    public async Task<Result<${EntitySimpleName}Response>> Handle(Get${EntitySimpleName}ByIdQuery request, CancellationToken cancellationToken)
    {
        var entity = await _${EntitySimpleName}Repository.FindById(request.Id);

        if (entity is null)
        {
            return Result.Fail<${EntitySimpleName}Response>(new Error(HttpStatusCode.NotFound,
                string.Format(ExceptionStrings.${EntitySimpleName}NotFound, request.Id)));
        }

        var ${EntitySimpleName}DTO = entity.ConvertToDTO();
        var response = new ${EntitySimpleName}Response(${EntitySimpleName}DTO);
        return Result.Success(response);
    }
}