internal sealed class Update${EntitySimpleName}CommandHandler(I${EntitySimpleName}Repository ${EntitySimpleName}Repository, IUnitOfWork<EmpresasContext> unitOfWork) : ICommandHandler<Update${EntitySimpleName}Command, ${EntitySimpleName}Response>
{
    private readonly I${EntitySimpleName}Repository _${EntitySimpleName}Repository = ${EntitySimpleName}Repository ?? throw new ArgumentNullException(nameof(${EntitySimpleName}Repository));
    private readonly IUnitOfWork<EmpresasContext> _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));

    public async Task<Result<${EntitySimpleName}Response>> Handle(Update${EntitySimpleName}Command request, CancellationToken cancellationToken)
    {
        ${EntitySimpleName}DTO dto = request.${EntitySimpleName}DTO;
        ${EntitySimpleName}Model model = dto.ConvertToModel();

        ${EntitySimpleName}Entity entity = await _${EntitySimpleName}Repository.FindById(dto.${EntityID});

        if (entity is null)
        {
            return Result.Fail<${EntitySimpleName}Response>(new Error(HttpStatusCode.NotFound,
            string.Format(ExceptionStrings.${EntitySimpleName}NotFound, dto.${EntityID})));
        }

        if (model.IsValid())
        {
            ${EntitySimpleName}Entity newEntity = model.ConvertToEntity();
            await _${EntitySimpleName}Repository.Edit(entity, newEntity);
            await _unitOfWork.SaveChangesAsync();
            return Result.Success(new ${EntitySimpleName}Response(newEntity.ConvertToDTO()));
        }
        return Result.Fail<${EntitySimpleName}Response>(new Error(HttpStatusCode.NotFound,
            ExceptionStrings.CannotUpdate${EntitySimpleName}));
    }
}

