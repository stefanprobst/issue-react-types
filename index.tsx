import type { ReactNode } from "react";

function Page() {
	// 'PageContent' cannot be used as a JSX component.
  // Its type '() => Promise<ReactNode>' is not a valid JSX element type.
  //   Type '() => Promise<ReactNode>' is not assignable to type '(props: any) => ReactNode'.
  //     Type 'Promise<ReactNode>' is not assignable to type 'ReactNode'.
  //       Type 'Promise<ReactNode>' is not assignable to type 'Promise<AwaitedReactNode>'.
  //         Type 'ReactNode' is not assignable to type 'AwaitedReactNode'.
  //           Type 'Promise<AwaitedReactNode>' is not assignable to type 'AwaitedReactNode'.ts(2786)
	return <PageContent />
}

async function PageContent(): Promise<ReactNode> {
	return <div>Check</div>
}