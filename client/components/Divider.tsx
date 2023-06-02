import { FC } from 'react'

type DiverProps = {
  mt?: string,
  mb?: string,
  pt?: string,
  pb?: string,
}

const Divider: FC<DiverProps> = ({ mt = "", mb = "", pt = "pt-2", pb = "pb-2"}) => {
  return (
    <div className={`w-full ${mt} ${mb} ${pt} ${pb}`}>
      <hr className="w-full border-neutral-700" />
    </div>
  )
}

export default Divider