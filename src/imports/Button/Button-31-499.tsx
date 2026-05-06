import svgPaths from "./svg-khtj37jf9u";

export default function Button() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] size-full" data-name="Button">
      <div className="flex flex-col font-['Sofia_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Заяви</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right icon">
        <div className="absolute inset-[17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
            <g id="Vector">
              <path d={svgPaths.p1c890480} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3dc1e00} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}