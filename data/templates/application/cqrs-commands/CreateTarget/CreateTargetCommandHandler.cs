internal sealed class Create${EntitySimpleName}CommandHandler(I${EntitySimpleName}Repository ${EntitySimpleName}Repository, IUnitOfWork<EmpresasContext> unitOfWork) : ICommandHandler<Create${EntitySimpleName}Command, ${EntitySimpleName}Response>
{
    private readonly I${EntitySimpleName}Repository _${EntitySimpleName}Repository = ${EntitySimpleName}Repository ?? throw new ArgumentNullException(nameof(${EntitySimpleName}Repository));
    private readonly IUnitOfWork<EmpresasContext> _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));

    public async Task<Result<${EntitySimpleName}Response>> Handle(Create${EntitySimpleName}Command request, CancellationToken cancellationToken)
    {
        ${EntitySimpleName}DTO dto = request.${EntitySimpleName}DTO;
        ${EntitySimpleName}Model model = dto.ConvertToModel();
        
        if(model.IsValid())
        {
            ${EntitySimpleName}Entity ${EntitySimpleName}Entity = model.ConvertToEntity();
            await _${EntitySimpleName}Repository.Add(${EntitySimpleName}Entity);
            await _unitOfWork.SaveChangesAsync();
            return Result.Success(new ${EntitySimpleName}Response(${EntitySimpleName}Entity.ConvertToDTO()));
        }
        return Result.Fail<${EntitySimpleName}Response>(new Error(HttpStatusCode.BadRequest,
            ExceptionStrings.CannotCreate${EntitySimpleName}));
    }
}